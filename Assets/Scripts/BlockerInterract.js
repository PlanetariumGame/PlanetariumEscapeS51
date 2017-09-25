var TheDistance : float = PlayerCasting.DistanceFromTarget;
var timer : float = 2.0;
var timeCounting : boolean = false;
var BlockerIdentity : int = 12345;
var UnlockedDisplay : GameObject;
var Blocker1 : GameObject;
var Blocker2 : GameObject;

function Update () 
{
	if(timeCounting == true)
		timer -= Time.deltaTime;

	if(timer <=0)
	{
		timeCounting = false;
		UnlockedDisplay.SetActive(false);

		Destroy(Blocker1);
		Destroy(Blocker2);
	}

	TheDistance = PlayerCasting.DistanceFromTarget;
	Debug.Log(PlayerCasting.DistanceFromTarget);
}

function OnMouseDown () 
{
	if (TheDistance <= 10) 
	{
		if(InventorySelector.InventorySelected==BlockerIdentity)
		{
			timeCounting = true;
			UnlockedDisplay.SetActive(true);
		}
	}
}

function OnMouseExit()
{
	UnlockedDisplay.SetActive(false);
}

