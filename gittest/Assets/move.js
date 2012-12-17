#pragma strict

function Start () {

}

function Update () {


transform.rotation *=Quaternion.AngleAxis(Input.GetAxis("Horizontal")*30*Time.deltaTime,Vector3(0,0,1));

}