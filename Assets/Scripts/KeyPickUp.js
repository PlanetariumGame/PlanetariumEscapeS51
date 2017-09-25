var TheDistance : float = PlayerCasting.DistanceFromTarget;
var Key : GameObject;
var KeyButton : GameObject;
var TextDisplay : GameObject;
var KeyTrigger : GameObject; 

function Update () 
{
	TheDistance = PlayerCasting.DistanceFromTarget;
	Debug.Log(PlayerCasting.DistanceFromTarget);
}

function OnMouseOver() 
{
	if (TheDistance <= 10) 
	{
		TextDisplay.SetActive(true);
	}
}

function OnMouseExit()
{
	TextDisplay.SetActive(false);
}

function OnMouseDown () 
{
	if (TheDistance <= 10) 
	{
		transform.position = Vector3(0, -1000, 0);
		KeyButton.SetActive(true);
		Key.SetActive(false);
		TextDisplay.SetActive(false);
		KeyButton.GetComponent.<KeyButtonPress>().ButtonIdentity
		 = KeyTrigger.GetComponent.<KeyIdentifier1>().Identity;
	}
}