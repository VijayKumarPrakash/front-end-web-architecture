// ========================================
// Analytics Workshop - Array Methods Practice
// ========================================

// Dataset
const analyticsData = [
  {
    name: "Alice",
    totalSessions: 36,
    avgSessionDuration: 180
  },
  {
    name: "Bob",
    totalSessions: 2,
    avgSessionDuration: 240
  },
  {
    name: "Charlie",
    totalSessions: 21,
    avgSessionDuration: 90
  },
  {
    name: "Diana",
    totalSessions: 72,
    avgSessionDuration: 300
  },
  {
    name: "Smith",
    totalSessions: 43,
    avgSessionDuration: 78
  },
  {
    name: "Eve",
    totalSessions: 1,
    avgSessionDuration: 15
  }
];

// Functions to implement

/**
 * 1. Conditionals
 * Return "Good" if avgSessionDuration >= 200, otherwise "Low"
 * @param {Object} user - User object with avgSessionDuration property
 * @returns {string} "Good" or "Low"
 */
const getEngagementLevel = (user) => {
  // TODO: use if/else or ternary operator
  // Hint: Check if user.avgSessionDuration >= 200
  if (user.avgSessionDuration >= 200) {
    return "Good 🟢"
  }
  else {
    return "Low 🔴"
  }
};

/**
 * 2. For Loop
 * Find the user with the longest avgSessionDuration
 * @param {Array} data - Array of user objects
 * @returns {string} Name of user with longest session
 */
const findLongestSessionUser = (data) => {
  let longest_session_user = "";
  let longest_session_duration = 0;

  data.forEach(user => {
    if (user.avgSessionDuration > longest_session_duration) {
      longest_session_duration = user.avgSessionDuration;
      longest_session_user = user.name;
    }
  });
  return longest_session_user + " (" + longest_session_duration + " minutes)"
};

/**
 * 3. Map
 * Format each user's session count
 * @param {Array} data - Array of user objects
 * @returns {Array} Array of formatted strings like "Alice: 3 sessions"
 */
const formatSessions = (data) => {
  // TODO: use map
  // Hint: Use template literal `${user.name}: ${user.totalSessions} sessions`
  return data.map(user => `${user.name}: ${user.totalSessions} sessions`)
};

/**
 * 4. Filter
 * Get names of users with >= 5 sessions
 * @param {Array} data - Array of user objects
 * @returns {Array} Array of active user names
 */
const getActiveUsers = (data) => {
  // TODO: use filter + map
  // Hint: First filter users with totalSessions >= 5, then map to get names
  let filteredData = data.filter(user => user.totalSessions > 4)
  return filteredData.map(user => user.name)
};

/**
 * 5. Reduce
 * Calculate total sessions across all users
 * @param {Array} data - Array of user objects
 * @returns {number} Sum of all totalSessions
 */
const getTotalSessions = (data) => {
  // TODO: use reduce
  // Hint: Accumulate user.totalSessions
  return data.reduce(calculateTotalSessions = (total, user) => total + user.totalSessions, 0)
};

// Moved this function in-line above to simplify
// function calculateTotalSessions(total, user) {
//   return total + user.totalSessions;
// }

// UI Functions

const output = document.getElementById('output');

const appendOutput = (text) => {
  output.textContent += text + '\n';
};

const clearOutput = () => {
  output.textContent = '';
};

// Display raw data
document.getElementById('raw-data').textContent = JSON.stringify(analyticsData, null, 2);

// Button handlers
const runEngagementLevel = () => {
  // clearOutput();
  appendOutput('\n🖥️ Engagement Levels\n');
  analyticsData.forEach(user => {
    const level = getEngagementLevel(user);
    appendOutput(`${user.name} engagement: ${level}`);
  });
};

const runLongestSession = () => {
  const longest = findLongestSessionUser(analyticsData);
  appendOutput(`\n🏆 Longest session user: ${longest}`);
};

const runFormatSessions = () => {
  const formatted = formatSessions(analyticsData);
  appendOutput(`\n📝 Sessions formatted: ${JSON.stringify(formatted, null, 2)}`);
};

const runActiveUsers = () => {
  const activePeople = getActiveUsers(analyticsData);
  // appendOutput(`\n🔥 Active users (≥5): ${JSON.stringify(activePeople)}`);
  // Nicer way to display people
  appendOutput(`\n🔥 Active users (≥5): ${activePeople.join(", ")}`);
};

const runTotalSessions = () => {
  const total = getTotalSessions(analyticsData);
  appendOutput(`\n📊 Total sessions: ${total}`);
};

const reset = () => {
  clearOutput();
};
