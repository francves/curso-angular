import {Pipe} from "@angular/core";
import linkifyStr from 'linkifyjs/string';

@Pipe({name: 'linkifystr'})
export class LinkifystrPipe{
	transform(str: string): string{
		return str ? linkifyStr(str, {target:'_system'}) : str;
	}
}