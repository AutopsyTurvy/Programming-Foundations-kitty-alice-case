const sewingMachine = {
    manufacturer: "Singer",
    stitchesPerInch: 12,
    threadLengthInMeters: 100,
    anObjectOfFunction: true,
    anObjectOfDecoration: false,
    necessaryAccoutrements: ["Bobbin", "Thread", "Tension Check", "New Needle", "Chosen Fabric"],
    powerOn: false,
    threadStatus: 100,
    threadConsumption: 10,
  
    togglePower() {
      if (!sewingMachine.powerOn) {
        sewingMachine.powerOn = true;
        console.log("Your sewing machine is now turned on!");
        sewingMachine.consumeThread();
      } else {
        console.log("Your sewing machine is now turned off!");
        sewingMachine.powerOn = false;
      }
    },
  
    consumeThread() {
      for (let i = 0; i < sewingMachine.threadConsumption; i++) {
        if (sewingMachine.threadStatus > 0) {
          sewingMachine.threadStatus--;
        }
      }
      console.log("Your machine consumed " + sewingMachine.threadConsumption + " meters of thread. Your remaining thread is: " + sewingMachine.threadStatus + " meters.");
      if (sewingMachine.threadStatus === 0) {
        console.log("Oops! We're out of thread. Please get me some more!");
      }
    },
  
    displayThreadStatus() {
      console.log("Your thread status is: " + sewingMachine.threadStatus + " meters");
    }
  };
  
  sewingMachine.togglePower();
  sewingMachine.displayThreadStatus();
  sewingMachine.togglePower();
  sewingMachine.togglePower();
  sewingMachine.displayThreadStatus();
  
  

//just do more of these if you want to use more thread! But i think you'd do that if you were sewing anyway! :)
