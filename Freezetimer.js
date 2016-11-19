
/*   javascript:$.getScript("");void(0);
 * 	Author: Crimsoni
 * 	Script: FreezeTimers
 * 	Description: Run to freeze attack timers only, without freezing resources or the server clock.
 */
if(Timing.tickHandlers.timers._timers.length>0)
{
tmptimers=Timing.tickHandlers.timers._timers;
Timing.tickHandlers.timers._timers={};
UI.SuccessMessage("Timer(s) frozen", 500);
}
else
{
Timing.tickHandlers.timers._timers=tmptimers;
UI.SuccessMessage("Timer(s) restarted", 500);
}
