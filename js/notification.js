const DELAY = 3000;
let timerId = null;

const notification = document.querySelector('.js-alert');

const onNotificationHide = () => {
  notification.classList.remove('is-visible');
};

const onNotificationShow = () => {
  notification.classList.add('is-visible');

  timerId = setTimeout(() => {
    onNotificationHide();
  }, DELAY);
};

onNotificationShow();

const onNotificationClick = () => {
  onNotificationHide();
  clearTimeout(timerId);
};

notification.addEventListener('click', onNotificationClick);
