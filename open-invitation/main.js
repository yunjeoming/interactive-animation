console.log('first');

const $invitation = document.querySelector('.invitation');
const $pages = document.querySelectorAll('.page');
let openedInvitation = false;

$invitation.addEventListener('click', (e) => {
  const pageElem = getTargetElem(e.target, 'page');
  if (pageElem && !openedInvitation) {
    openInvitation(pageElem);
  }

  const closeBtnElem = getTargetElem(e.target, 'close-btn');
  if (closeBtnElem) {
    closeInvitation();
  }
});

function getTargetElem(elem, className) {
  const targetElem = elem.closest(`.${className}`);
  return targetElem || null;
}

function openInvitation(pageElem) {
  pageElem.classList.add('page-opened');

  openedInvitation = true;

  const rect = pageElem.getBoundingClientRect();
  const dy = -rect.height / 2;
  $invitation.style.transform = `translate3d(0, ${dy}px, 50vh)`;
  setTimeout(() => {
    $invitation.classList.add('invitation-opened');
  }, 1000);
}

function closeInvitation() {
  $pages.forEach((page) => page.classList.remove('page-opened'));
  openedInvitation = false;
  $invitation.classList.remove('invitation-opened');
  $invitation.style.transform = `translate3d(-50%, -50%, 0)`;
}
