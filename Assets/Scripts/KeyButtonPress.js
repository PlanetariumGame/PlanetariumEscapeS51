var TheDistance : float = PlayerCasting.DistanceFromTarget;
var ButtonIdentity : int;
var InventoryIdentity : int;


function Update()
{
	TheDistance = PlayerCasting.DistanceFromTarget;
	Debug.Log(PlayerCasting.DistanceFromTarget);
}

function SelectInventory () 
{
	InventorySelector.InventorySelected = ButtonIdentity;
	InventoryIdentity = InventorySelector.InventorySelected;
}