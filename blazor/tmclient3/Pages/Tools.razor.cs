using System;
using System.Collections.Generic;
using System.Device.Gpio;
using System.Linq;
using System.Threading.Tasks;

namespace blazor.Pages
{
    public partial class Tools
    {
        async Task beep()
        {
            try
            {
                var ctrl = new GpioController();
                ctrl.OpenPin(5, PinMode.Output);
                ctrl.Write(5, PinValue.High);
                await Task.Delay(1000);
                ctrl.Write(5, PinValue.Low);
            }
            catch (System.NotSupportedException ex)
            {
                Console.WriteLine("Would toggle pin 5 if it exists!");
            }
            catch(Exception ex)
            {
                throw new Exception("Error toogling buzzer!", ex);
            }
        }
    }
}
