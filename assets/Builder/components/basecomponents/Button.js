/**
 * Created by Stijn on 02/03/16.
 */
var Button = ['Component', {
    render: function () {
        var btn = EZI.make('a', {
            class: 'button ' + this.properties.class,
            href: (this.properties.link)?this.properties.link:undefined,
            style: this.properties.style,
            text: this.properties.text,
            on: this.properties.on
        });
        return btn;
    }
}];


module.exports = Button;
