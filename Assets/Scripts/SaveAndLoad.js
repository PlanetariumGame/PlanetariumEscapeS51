var MenuButton:GameObject;
var MenuPanel:GameObject;
var SaveQuestPanel:GameObject;
var Inventory : GameObject;

function SaveGame(){
	PlayerPrefs.SetFloat("PlayerX",transform.position.x);
	PlayerPrefs.SetFloat("PlayerY",transform.position.y);
	PlayerPrefs.SetFloat("PlayerZ",transform.position.z);
	Debug.Log("Before save the game, the current position is("+transform.position.x+","+transform.position.y+","+transform.position.z+")");

	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(true);
	MenuButton.SetActive(false);
	Debug.Log("After you click 'yes', the active of saveQuestPanel will be "+SaveQuestPanel.activeSelf);
	Debug.Log("After you click 'yes', the active of MenuPanel will be "+MenuPanel.activeSelf);
	Debug.Log("After you click 'yes', the active of MenuButton will be "+MenuButton.activeSelf);
	Inventory.SetActive(false);
}

function LoadGame(){
	var x:float=PlayerPrefs.GetFloat("PlayerX");
	var y:float=PlayerPrefs.GetFloat("PlayerY");
	var z:float=PlayerPrefs.GetFloat("PlayerZ");

	transform.position=Vector3(x,y,z);
	Debug.Log("The last saved position is("+x+","+y+","+z+")");

	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(false);
	MenuButton.SetActive(true);
	Inventory.SetActive(true);
	Debug.Log("After you click 'Load Game', the active of saveQuestPanel will be "+SaveQuestPanel.activeSelf);
	Debug.Log("After you click 'Load Game', the active of MenuPanel will be "+MenuPanel.activeSelf);
	Debug.Log("After you click 'Load Game', the active of MenuButton will be "+MenuButton.activeSelf);
}

function NewGame(){
	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(false);
	MenuButton.SetActive(true);
	transform.position=Vector3(288.18,317.93,-913.7);
	Inventory.SetActive(true);
}

function NoSave(){
	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(true);
	MenuButton.SetActive(false);
	Inventory.SetActive(false);
	Debug.Log("After you click 'No', the active of saveQuestPanel will be "+SaveQuestPanel.activeSelf);
	Debug.Log("After you click 'No', the active of MenuPanel will be "+MenuPanel.activeSelf);
	Debug.Log("After you click 'No', the active of MenuButton will be "+MenuButton.activeSelf);

}

function QuitGame(){
	Application.Quit();
}
