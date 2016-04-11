'use strict';

define(['react'], function(React) {
    return React.createClass({
        displayName: 'Message',
        render: function() {
            return (
                <div className={"alert alert-" + (this.props.value.fatal || this.props.value.severity === 2 ? "danger" : "warning" )} title={this.props.value.message}>
                    {this.props.value.line}:{this.props.value.column} - {this.props.value.message} (<a href="http://eslint.org/docs/rules/{this.props.value.ruleId}">{this.props.value.ruleId}</a>)
                </div>
            );
        }
    });
});
