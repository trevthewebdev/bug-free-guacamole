((app) => {
  const notifications = [];

  /* api calls */
  async function getNotifications() {
    await sleep(randomInt(2));
    return {
      data: notifications,
      meta: { total: notifications.length },
    };
  }

  function addNotification(payload) {
    await sleep(randomInt(2));

    notifications.push(payload);

    return { data: payload };
  }

  // exports
  app.getNotifications = getNotifications;
  app.addNotification = addNotification;
})(window.app || {});
