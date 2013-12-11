Ext.define('Ext.ux.form.field.Currency', {
	extend: 'Ext.form.field.Number',
	alias: 'widget.currencyfield',
	listeners: {
		focus: {
			priority: 999,
			fn: function(){
				this.hasFocus = true;
				this.setValue(this.getValue());
			}
		},
		blur: {
			delay: 100,
			priority: -999,
			fn: function(){
				this.hasFocus = false;
				this.setValue(this.getValue());
			}
		}
	},
	rawToValue: function(value){
		return parseFloat(String(value).replace(/[^\-0-9.]/g, ''));
	},
	processRawValue: function(value){
		return this.rawToValue(value);
	},
	valueToRaw: function(value){
		return this.formatCurrency( (!isNaN(value) ? value : 0), 3, '.', (this.hasFocus ? '' : ',' ) );
	},
	formatCurrency: function(v, c, d, t){
		var n = v,
			c = isNaN(c = Math.abs(c)) ? 3 : c, 
			d = d == undefined ? "." : d, 
			t = t == undefined ? "," : t, 
			s = n < 0 ? "-" : "", 
			i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
			j = (j = i.length) > 3 ? j % 3 : 0;
		return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	}
});
