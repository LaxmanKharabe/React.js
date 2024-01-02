export function ContextMenuEvent(){

    function ViewLarge(){
        window.open('kids.png','Kids','width=300 height=400');
    }
    function DisableContext(){
       
        document.oncontextmenu = function(){
            alert("Right Click Disabled using the onContextMenu event");
            return false;
        }
    }
    return(
        <div className="container-fluid" onContextMenu={DisableContext}>
            <h2>Button Events</h2>
            <p>Right click on image to get effect of onContextMenu Event</p>
            <img onDoubleClick={ViewLarge} src="iphone14Black.png" width="100" height="100" />
            <p>Double Click to View Large</p>
        </div>
    )
}