const TabNavItems = document.querySelectorAll('.tabs-members__button');
const TabItems = document.querySelectorAll('.item-tabs');
document.addEventListener('click', function(e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if(targetElement.closest('.tabs-members__button')) {
    TabNavItems.forEach((TabNavItem, index) => {
      if(TabNavItem.classList.contains('active')){
        currentActiveIndex = index;
        TabNavItem.classList.remove('active');
      }
      if(TabNavItem === targetElement){
        newActiveIndex = index;
      }
      //
    });
    targetElement.classList.add('active');
    TabItems[currentActiveIndex].classList.remove('active');
    TabItems[newActiveIndex].classList.add('active');
    console. log(TabItems);
  }
});