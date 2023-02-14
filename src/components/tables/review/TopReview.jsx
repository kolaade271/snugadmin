import React from 'react';
class TopReview extends React.Component {
    constructor() {
        super();
        this.state = { reviews: [] };
    }

    componentDidMount() {
        fetch('https://reqres.in/api/reviews')
            .then(response => response.json())
            .then(json => this.setState({ reviews: json.data }));
    }

    render() {
        return (
            <div>
                {
                    this.state.reviews.slice(0, 3).map(user => (
                        <figure key={user.id}>
                            <img src={user.avatar} />
                            <figcaption>
                                {user.first_name} {user.last_name}
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        );
    }
}



export default TopReview;