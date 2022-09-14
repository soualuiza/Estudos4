function gamestartup()

    print("Made with luv by RXPXRZ.")
end

function tutorial()

    print ("Do you want to do the tutorial?? y/n.")
    local confirm = io.read()

    if confirm == "y" 
        then print("This is a guessing game where the computer will\
            choose a random number, the player will have to figure it out\
            just with trying and missing process.")
            

        end
    
    end

function randomnum()
    return 50
end


function captura_palpite()
        while true do
            palpite = io.read()

   
            if type(tonumber(palpite)) == "number" then
                palpite = tonumber(palpite) 
                if palpite > 100 or palpite < 1 then
                print("Wrong answer, type a value between 1 and 100.")
                
            else 
                  return(palpite)
            end
        else 
            print("Type a number, please.")
        end
        
    end 
          
            


end

            
gamestartup()
tutorial()
print(captura_palpite())