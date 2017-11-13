'use strict';

polarity.export = PolarityComponent.extend({
    details: Ember.computed.alias('block.data.details'),
    summaryTags: Ember.computed('details.tags', function(){
        let summaryTags = [];

        if(this.get('details.contactInfo.fullName')){
            summaryTags.push(this.get('details.contactInfo.fullName'));
        }


        if(summaryTags.length === 0){
            summaryTags.push('No Tags');
        }
        return summaryTags;
    })
});