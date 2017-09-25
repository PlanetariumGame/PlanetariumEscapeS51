var TheDistance : float = PlayerCasting.DistanceFromTarget;
var NoteOnGround : GameObject;
var NoteIn : GameObject;
var TextDisplay : GameObject;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;
	Debug.Log(PlayerCasting.DistanceFromTarget);
}

function OnMouseOver() {
	if (TheDistance <= 10) {
	TextDisplay.SetActive(true);
	}
}

function OnMouseDown () {
	if (TheDistance <= 29) {
		transform.position = Vector3(0, -1000, 0);
		NoteIn.SetActive(true);
		NoteOnGround.SetActive(false);
		TextDisplay.SetActive(false);
	}
}