import Notify from './notify';
export default class Slack extends Notify {
    constructor(webhook, githubCtx, options) {
        super(webhook, githubCtx, options);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    genSin(_signKey, _timestamp) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC9zbGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQXdCLE1BQU0sVUFBVSxDQUFDO0FBRWhELE1BQU0sQ0FBQyxPQUFPLE9BQU8sS0FBTSxTQUFRLE1BQU07SUFDdkMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxPQUFZO1FBQzNELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBNEIsRUFBRSxVQUFrQjtRQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGIn0=