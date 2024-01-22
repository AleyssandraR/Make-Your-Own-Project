//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
            this.el.setAttribute('rotation', {x: this.data.speedOfRotation, y: this.data.speedOfRotation, z: this.data.speedOfRotation})
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
            this.el.setAttribute('rotation', {x: this.data.speedOfRotation, y: this.data.speedOfRotation, z: this.data.speedOfRotation})
          }
        }

        if (e.key === "ArrowUp") {
            if (this.data.speedOfRotation < -0.1) {
              this.data.speedOfRotation -= 0.01;
              this.el.setAttribute('rotation', {x: this.data.speedOfRotation, y: this.data.speedOfRotation, z: this.data.speedOfRotation})
            }
          }
          if (e.key === "ArrowDown") {
            if (this.data.speedOfRotation > 0.1) {
              this.data.speedOfRotation += 0.01;
              this.el.setAttribute('rotation', {x: this.data.speedOfRotation, y: this.data.speedOfRotation, z: this.data.speedOfRotation})
            }
          }

      });
    },
  });
  
  //Plane rotation component
  AFRAME.registerComponent("spy-movement", {
    schema: {
      speedOfPosition: { type: "number", default: 0 },
      speedOfRotation: {type:'number', default:0}
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data from the attributes
        this.data.speedOfPosition = this.el.getAttribute("position");
        this.data.speedOfRotation = this.el.getAttribute("rotation");
       
        var planeRotation = this.data.speedOfRotation;
        var planePosition = this.data.speedOfPosition;

  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (planePosition.x < 10) {
            planePosition.x += 0.5;
            this.el.setAttribute("position", planePosition);
            this.el.setAttribute('animation-mixer', {})
            this.el.setAttribute('rotation', planeRotation)          
        }
        }

        if (e.key === "ArrowLeft") {
          if (planePosition.x > -10) {
            planePosition.x -= 0.5;
            this.el.setAttribute("position", planePosition);
            this.el.setAttribute('rotation', planeRotation)
            this.el.setAttribute('animation-mixer', {})
          }
        }

        if (e.key === "ArrowUp") {
            if (planePosition.z > 10) {
              planePosition.z = 0.5;
              this.el.setAttribute("position", planePosition);
              this.el.setAttribute('rotation', planeRotation)
              this.el.setAttribute('animation-mixer', {})
            }
          }

          if (e.key === "ArrowDown") {
            if (planePosition.y > -2) {
                planePosition.y -= 0.01;
                this.el.setAttribute("position", planePosition);
                this.el.setAttribute('animation-mixer', {})
            }
            if (planeRotation.z > -10) {
                planeRotation.z -= 0.5;
                this.el.setAttribute("rotation", planeRotation);
                this.el.setAttribute('animation-mixer', {})
          }

      });
    },
  });