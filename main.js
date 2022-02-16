const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = 4

	// Return the chassis that now has a body property on it
	return chassisObject
}
const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.engine = "4.8L"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.steeringwheel = "Tilting"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const addDriveTrain = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.driveTrain = "Two wheel drive"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

let chassis = createChassis()
let chassisWithBody = addBody(chassis)
let chassisWithWheel = addWheels(chassisWithBody)
let chasisWithEngine = addEngine(chassisWithWheel)
let chassisWithSteering = addSteeringWheel(chasisWithEngine)
let chassisWithTrain = addDriveTrain(chassisWithSteering)

// console.log(addSteeringWheel)
console.log(chassis)
console.log(chassisWithTrain)
