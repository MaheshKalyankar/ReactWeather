var React = require('react');

var About = (props) => {
    return (
        <div>
                <h1 className="text-center">About!</h1>
                <p>This is a paragraph</p>
                <ul>
                    <li>
                        <a href="https://www.google.com"> Google</a> - Browse here
                    </li>
                </ul>
        </div>
    )
};

module.exports = About;