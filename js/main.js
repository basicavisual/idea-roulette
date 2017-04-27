// Cambios económicos
window.onload = function () {
     var wheel1 = new wheelnav("wheelDiv1");

     wheel1.slicePathFunction = slicePath().DonutSlice;
     wheel1.wheelRadius = 220;
     wheel1.spreaderEnable = true;
     wheel1.spreaderRadius = 65;
     wheel1.spreaderTitleFont = '100 60px Roboto'
     wheel1.navAngle = 270;
     wheel1.titleRotateAngle = 180;
     wheel1.initTitleRotate = true;
     wheel1.selectedNavItemIndex = null;
     wheel1.titleFont = '100 15px Roboto';
     wheel1.createWheel(firstElements);

     for (i = 0; i < firstElements.length; i++) {
       wheel1.navItems[i].slicePathAttr = {stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.firstColorOne};
       wheel1.navItems[i].titleAttr = {fill: '#fff'};
       wheel1.navItems[i].sliceSelectedAttr = { stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.firstColorPlus};
       wheel1.navItems[i].sliceHoverAttr = { stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.firstColorMinus };
     };

     wheel1.refreshWheel();

     wheel1.animateFinishFunction = onClickWheel1;
      function onClickWheel1() {
         var x = wheel1.currentClick
         document.getElementById("svgtag").textContent = wheel1Content[x][1]
       console.log(wheel1Content[x][1]);
      };

    var wheel2 = new wheelnav("wheelDiv2");

    wheel2.slicePathFunction = slicePath().DonutSlice;
    wheel2.wheelRadius = 220;
    wheel2.spreaderEnable = true;
    wheel2.spreaderRadius = 65;
    wheel2.spreaderTitleFont = '100 60px Roboto'
    wheel2.navAngle = 270;
    wheel2.titleRotateAngle = 180;
    wheel2.initTitleRotate = true;
    wheel2.selectedNavItemIndex = null;
    wheel2.titleFont = '100 15px Roboto';
    wheel2.createWheel(secondElements);

    for (i = 0; i < secondElements.length; i++) {
      wheel2.navItems[i].slicePathAttr = {stroke: '#fff', 'stroke-width': 1, 'fill': colorpalettecustom.secondColorOne};
      wheel2.navItems[i].titleAttr = {fill: '#fff'};
      wheel2.navItems[i].sliceSelectedAttr = { stroke: '#fff', 'stroke-width': 1, 'fill': colorpalettecustom.secondColorPlus};
      wheel2.navItems[i].sliceHoverAttr = { stroke: '#fff', 'stroke-width': 1, 'fill': colorpalettecustom.secondColorMinus };
    };

    wheel2.refreshWheel();

    wheel2.animateFinishFunction = onClickWheel2;
     function onClickWheel2() {
        var x = wheel2.currentClick
        document.getElementById("svgtag2").textContent = wheel2Content[x][1]
      console.log(wheel2Content[x][1]);
     };

     var wheel3 = new wheelnav("wheelDiv3");

     wheel3.slicePathFunction = slicePath().DonutSlice;
     wheel3.wheelRadius = 220;
     wheel3.spreaderEnable = true;
     wheel3.spreaderRadius = 65;
     wheel3.spreaderTitleFont = '100 60px Roboto'
     wheel3.navAngle = 270;
     wheel3.titleRotateAngle = 180;
     wheel3.initTitleRotate = true;
     wheel3.selectedNavItemIndex = null;
     wheel3.titleFont = '100 16px Roboto';
     wheel3.createWheel(thirdElements);

     for (i = 0; i < thirdElements.length; i++) {
       wheel3.navItems[i].slicePathAttr = {stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.thirdColorOne};
       wheel3.navItems[i].titleAttr = {fill: '#fff'};
       wheel3.navItems[i].sliceSelectedAttr = { stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.thirdColorPlus};
       wheel3.navItems[i].sliceHoverAttr = { stroke: '#fff', 'stroke-width': 2, 'fill': colorpalettecustom.thirdColorMinus };
     };
     wheel3.refreshWheel();
     wheel3.animateFinishFunction = onClickWheel3;
      function onClickWheel3() {
         var x = wheel3.currentClick
         document.getElementById("svgtag3").textContent = wheel3Content[x][1]
       console.log(wheel3Content[x][1]);
      };


      var allWheels = [wheel1, wheel2, wheel3];

      function checkStatus(arr) {
        var eval = []
        for (i=0;i<arr.length;i++) {
          if(arr[i].currentPercent === arr[i].maxPercent) {
            eval.push(arr[i])
          }
        }
        console.log(eval)
        if (eval) {
          eval.forEach(function(x) {
            x.navigateWheel( Math.floor((Math.random() * x.navItemCount)) )
          })
        }
      };

      document.getElementById('randomButton').onclick = function(){checkStatus(allWheels)};
};
