Ext.define('Ext.ux.form.field.Currency', {
	extend: 'Ext.form.field.Number',
	alias: 'widget.currencyfield',
	listeners: {
		focus: function(){
			this.hasFocus = true;
			this.setValue(this.getValue());
		},
		blur: function(){
			this.hasFocus = false;
			this.setValue(this.getValue());
		},
	},
	rawToValue: function(value){
		return parseFloat(value.replace(/[^\-0-9.]/g, ''));
	},
	valueToRaw: function(value){
		return (!this.focused ? Ext.util.Format.currency( !isNaN(value) ? value : 0 ) : value);
	}
});