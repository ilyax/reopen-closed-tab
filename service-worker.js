const RECENTLY_CLOSED_LIMIT = 1;

function restoreSession(sessionId) {
  return new Promise((resolve, reject) => {
    chrome.sessions.restore(sessionId, (session) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }

      resolve(session);
    });
  });
}

function getSessionId(session) {
  return session?.tab?.sessionId ?? session?.window?.sessionId ?? null;
}

function getMostRecentClosedSession() {
  return new Promise((resolve, reject) => {
    chrome.sessions.getRecentlyClosed(
      { maxResults: RECENTLY_CLOSED_LIMIT },
      (sessions) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        resolve(sessions?.[0] ?? null);
      }
    );
  });
}

async function reopenLastClosedSession() {
  const session = await getMostRecentClosedSession();

  if (!session) {
    return;
  }

  const sessionId = getSessionId(session);

  try {
    if (sessionId) {
      await restoreSession(sessionId);
      return;
    }

    await restoreSession();
  } catch {
    await restoreSession();
  }
}

chrome.action.onClicked.addListener(() => {
  reopenLastClosedSession().catch((error) => {
    console.error("Failed to reopen the last closed session.", error);
  });
});
