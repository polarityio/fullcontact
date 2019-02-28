'use strict';

polarity.export = PolarityComponent.extend({
    details: Ember.computed.alias('block.data.details'),
    summaryTags: Ember.computed('details.tags', function(){
        let summaryTags = [];

        if(this.get('details.fullName')){
            summaryTags.push(this.get('details.fullName'));
        }


        if(summaryTags.length === 0){
            summaryTags.push('No Tags');
        }
        return summaryTags;
    })
});
