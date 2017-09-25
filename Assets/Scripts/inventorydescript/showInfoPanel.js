var InfoPanel : GameObject;
var Puzzle1P1 : GameObject;
var Puzzle1P2 : GameObject;
var Puzzle1P3 : GameObject;
var Puzzle1Solution : GameObject;

function OpenPanel () {
	InfoPanel.SetActive(true);
}

function OkClicked() {
	InfoPanel.SetActive(false);
}

function Update() {
	if(Puzzle1P1.activeSelf==true && Puzzle1P2.activeSelf==true && Puzzle1P3.activeSelf==true) {
		Puzzle1Solution.SetActive(true);
		Puzzle1P1.SetActive(false);
		Puzzle1P2.SetActive(false);
		Puzzle1P3.SetActive(false);
	}
}