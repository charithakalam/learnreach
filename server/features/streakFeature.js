function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getPreviousDate(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return formatDate(date);
}

function calculateStreaks(activityDates, today = formatDate(new Date())) {
  if (!activityDates || activityDates.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      activeDates: []
    };
  }

  const uniqueDates = [...new Set(activityDates)].sort();

  let longestStreak = 1;
  let currentStreak = 1;

  let streak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    if (getPreviousDate(uniqueDates[i]) === uniqueDates[i - 1]) {
      streak++;
      longestStreak = Math.max(longestStreak, streak);
    } else {
      streak = 1;
    }
  }

  const activeDateSet = new Set(uniqueDates);

  if (activeDateSet.has(today)) {
    currentStreak = 1;

    let date = today;

    while (activeDateSet.has(getPreviousDate(date))) {
      currentStreak++;
      date = getPreviousDate(date);
    }
  } else {
    const yesterday = getPreviousDate(today);

    if (activeDateSet.has(yesterday)) {
      currentStreak = 1;

      let date = yesterday;

      while (activeDateSet.has(getPreviousDate(date))) {
        currentStreak++;
        date = getPreviousDate(date);
      }
    } else {
      currentStreak = 0;
    }
  }

  return {
    currentStreak,
    longestStreak,
    activeDates: uniqueDates
  };
}

module.exports = {
  calculateStreaks
};