
var OurInventory : GameObject;
var InvStatus : int;

function Update () {
	if (Input.GetButtonDown("Inventory")) {
		if (InvStatus == 0){
			InvStatus = 1;
			OurInventory.SetActive(true);
		}
		else {
			OurInventory.SetActive(false);
			InvStatus = 0;
			}
		}
	}