
export function OnewayBinding(){
    var name = 'Laxman';

    return(
        <div>
            <p>Name is from the variable "name" and binded using the curly braces.</p>
            <p className="lead">
                Hello ! {name}
            </p>
        </div>
    )
}