import {OrderedMap, Map} from 'immutable';

export const sortArrayToId = (obj_arr, Record) => {
	return obj_arr.reduce((arr,obj)=>(
		arr.set(obj.id, (Record) ? new Record(obj) : obj )
	),new OrderedMap({}));
};

export const mapToArr = (map) => {
	return map.valueSeq().toArray();
}