static var DistanceFromTarget:float;

function Update() {
	var hit:RaycastHit;
	if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward),hit)){
		DistanceFromTarget=hit.distance;
	}
}