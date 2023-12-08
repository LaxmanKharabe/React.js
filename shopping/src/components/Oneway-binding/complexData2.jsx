import React from "react"

export function ComplexData() {
    var topics = [
        { "title": "HTML", "description": "It is a markup language" },
        { "title": "CSS", "description": "It is a stylesheet language" }
    ]
    var cards = [
        { "title": "Title 1", "description": "Lorem ipsum dolor sit amet" },
        { "title": "Title 2", "description": "Lorem ipsum dolor sit amet" },
        { "title": "Title 3", "description": "Lorem ipsum dolor sit amet" },
        { "title": "Title 4", "description": "Lorem ipsum dolor sit amet" },
        { "title": "Title 5", "description": "Lorem ipsum dolor sit amet" }
    ];
    let imageUrl = "https://media.istockphoto.com/id/1340128756/photo/defocused-hallway.jpg?s=1024x1024&w=is&k=20&c=aRQydiDjys8O4EFNPxnWcyxPHsnbxBl3HWs20jaUdyE=";

    return (
        <>
            <dl>
                {
                    topics.map(topic =>
                        <>
                            <dt key={topic.title}>{topic.title}</dt>
                            <dd key={topic.description}>{topic.description}</dd>
                        </>
                    )
                }
            </dl>

            <div className="container mt-5">
                <div className="row">
                    {
                        cards.map((card, index) => (
                            <div className="col-3 mt-5">
                                <div className="card" key={index}>
                                    <img src={imageUrl} className="card-img-top" alt={card.imageAlt} />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.description}</p>
                                        <a href={card.link} className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
