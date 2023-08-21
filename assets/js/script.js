
        // nav bar
        // for storing element in variable
        const myNav = document.getElementById("mySideNav");
        //  for adding class on element
         function change() {
             myNav.classList.toggle("show");
        }

        
        function changeTab(tabIndex) {
          const tabs = document.querySelectorAll('.tab');
          const tabContents = document.querySelectorAll('.tab-content');
        
          tabs.forEach((tab, index) => {
            if (index === tabIndex) {
              tab.classList.add('active');
              tabContents[index].classList.add('active');
            } else {
              tab.classList.remove('active');
              tabContents[index].classList.remove('active');
            }
          });
        }