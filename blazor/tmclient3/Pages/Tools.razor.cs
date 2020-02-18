using Iot.Device.CharacterLcd;
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

        void writeHW()
        {
            try
            {
                Console.WriteLine("Going to write a hello world to lcd...");
                using (var lcd = new Lcd1602(4, 17, new int[] { 24, 23, 22, 18 }))
                {
                    //using var lcd = new Lcd1602(7, 11, new int[] { 18, 16, 15, 12 });
                    lcd.Clear();
                    lcd.Write("Hello World");
                    Console.WriteLine("Done!");
                }
            }
            catch (System.NotSupportedException ex)
            {
                Console.WriteLine("Would write 'Hello World' to lcd!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error writing to lcd!");
                throw new Exception("Error writing to lcd!", ex);
            }
        }

        void writeHW2()
        {
            try
            {
                Console.WriteLine("Going to write a hello world to lcd type2...");
                using (var lcd = new Lcd1602(7, 11, new int[] { 18, 16, 15, 12 }))
                {
                    //using var lcd = new Lcd1602(7, 11, new int[] { 18, 16, 15, 12 });
                    lcd.Clear();
                    lcd.Write("Hello World");
                    Console.WriteLine("Done!");
                }
            }
            catch (System.NotSupportedException ex)
            {
                Console.WriteLine("Would write 'Hello World' to lcd!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error writing to lcd!");
                throw new Exception("Error writing to lcd!", ex);
            }
        }
    }
}
