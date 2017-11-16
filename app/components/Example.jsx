var React = require('react');

// var Example = React.createClass({
//     render :function () {
//         return (
//             <h3>Example</h3>
//         )
//     }
// });

var Example = (props) =>{
    return (
        <div>
            <h1 className="text-center">Example Component !</h1>
            <p> Here are a few exapmle locations to try : </p>
            <ol>
                <li>
                    <link to='/?location=London'>London UK</link>
                </li>
                <li>
                    <link to='/?location=Rio'>Rio Brazil</link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Example;