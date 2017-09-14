var MenuButton:GameObject;
var MenuPanel:GameObject;
var SaveQuestPanel:GameObject;

function SaveGame(){
	PlayerPrefs.SetFloat("PlayerX",transform.position.x);
	PlayerPrefs.SetFloat("PlayerY",transform.position.y);
	PlayerPrefs.SetFloat("PlayerZ",transform.position.z);

	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(true);
	MenuButton.SetActive(false);
}

function NewGame(){
	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(false);
	MenuButton.SetActive(true);
	transform.position=Vector3(288.18,317.93,-913.7);
}

function NoSave(){
	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(true);
	MenuButton.SetActive(false);
}

function QuitGame(){
	Application.Quit();
}

function LoadGame(){
	var x:float=PlayerPrefs.GetFloat("PlayerX");
	var y:float=PlayerPrefs.GetFloat("PlayerY");
	var z:float=PlayerPrefs.GetFloat("PlayerZ");

	transform.position=Vector3(x,y,z);

	SaveQuestPanel.SetActive(false);
	MenuPanel.SetActive(false);
	MenuButton.SetActive(true);

}