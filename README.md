### EQUIFAX

- Pequeña prueba teorica de entrevista laboral para empresa "EQUIFAX"
- Cabe señalar  que durante el tiempo de la entrevista no logre pensar claramente y luego que termino la entrevista di con el resultado en aproximadamente 10 min 





### Javascript  　

```javascript
var tamaños = [1, 4, 1, 3, 4, 3, 4];

var m = Math.max.apply(null, tamaños);

function repetidas() {
  var repetidas = 0;
  for (var i = 0; i < tamaños.length; i++) {
    if (tamaños[i] == m) {
      repetidas++;
      //console.log(repetidas);
    }
  }
  return repetidas;
}
console.log('el mayor es', m, 'y las veces que se repite son: ', repetidas());
```
### Python 3x
```python

repetidos=0
velas = [1,2,3,3]
def sacarmayor(velas):
   
    mayor=0
    repetidos=0
    for x in velas:
        if (x>mayor):
            mayor=x
                ##print ("repetidos",repetidos)
    return mayor
    
for x in velas:
    if sacarmayor(velas)==x:
        repetidos=repetidos+1
    ##print ("los repetidos son ",repetidos)
print ("la vela mas grande es: ",sacarmayor(velas),"y las velas que apagaria serian ",repetidos)

```

### PHP
```php
<?php
$repetidos=0;
$velas = array(1,2,3,2,1,3);
$maximo=max($velas);
for ($i = 1; $i <=count($velas); $i++) {
    if ($velas[$i-1]==$maximo){
        $repetidos=$repetidos+1;
    }

}
echo "la cantidad de velas son: ".count($velas)." y las repetidas son : ".$repetidos." con el valor de : ".$maximo
?>
```

### RUBY
```ruby
 velas=[1,2,3,2,1,3]
repetidas=0
def obtener_mayor(array)
    mayor=0
    for i in array do
        #puts (i)
        if i>mayor
            mayor=i
        end
    end
   mayor
end

mayor=obtener_mayor(velas)
for i in velas do 
    if i==mayor
        repetidas=repetidas+1
    end
   
end

puts ("la vela mas larga es: #{mayor} y las veces que se repite son #{repetidas}")

```
### JAVA 
```java
import javax.swing.JOptionPane;
/**
 *
 * @author Luis Céspedes
 */
public class Prueba {
   public static int ObtenerMayor (int lista[]){
       int mayor=0;
        for(int i=0;i<lista.length;i++){
           if (lista[i]>mayor){
               mayor=lista[i];
           }
        }
        return mayor;
    }
    public static void main(String[] args) {
        int[] velas = new int[]{ 1,2,3,1,2,3,3 };
        int repetidos=0;
        int numero;
        numero=velas.length;
        //System.out.println(ObtenerMayor(velas));
       for(int i=0;i<velas.length;i++){
         if (velas[i]==ObtenerMayor(velas)){
                repetidos++;
         }
        }
      JOptionPane.showMessageDialog(null, "El numero de velas son: "+ numero +" Y la vela mayor es  "+ObtenerMayor(velas) +" y se repite "+repetidos + " veces");
    }
     
}

```

### C
```c
#include <stdio.h>

int ObtenerMayor(int lista[],int tama){
	int mayor = 0;
	int largo2 = tama;
	 for(int i = 0; i < largo2; ++i) {
		 if (lista[i]>mayor){
			 mayor=lista[i];
		 }
	}
	return mayor;
}
int main(void)
{
	int velas[] = {1,2,3,1,1,2,3,3,3};
	int largo = 0;
	int repetidos = 0;
	int mayor = 0;
	largo = sizeof(velas)/sizeof(int);
	mayor = ObtenerMayor(velas,largo);
	for(int i = 0; i < largo; ++i) {
		 if (velas[i] == mayor){
			 repetidos++;
		 }
	}
	printf("la cantidas de velas son:  %d.\n", largo);
	printf("la vela mas grande es   %d.\n", mayor);
	printf("y se repite %d.\n", repetidos);
	printf("veces ");
	return 0;
}


```
### LUA
```lua
velas = {1,2,3,1,1,1,2,3}
mayor = 0 
repetidos = 0 
nvelas=0
for i,v in ipairs(velas) do
	nvelas=nvelas+1
	if v>mayor then 
		mayor=v
	end 
end
for i,v in ipairs(velas) do
	if v==mayor then 
		repetidos=repetidos+1
	end 
end

print("el numero de velas es: ",nvelas," la mayor es: ",mayor ," y se repite: ", repetidos," veces")
```

### R
```r
velas<-c(1,3,1,2,1,1,2,3,8,4,2,1,3,8)
maximo<-max(velas)
repetidos=0
nveleas=0
for (i in velas) {
  nveleas=nveleas+1
  if (i==maximo){
    repetidos=repetidos+1
      }
  }
sprintf("el numero de velas es : %d", nveleas)
sprintf("la mas alta es de: %d", maximo)
sprintf("y se repite : %d veces", repetidos )

plot(velas, type="o", col="blue", axes = FALSE, ann = FALSE, ylim = range(velas))


```

### GO
```GO
package main

import "fmt"

func main() {
	mayor := 0
	repetidos := 0
	nvelas := 0
	velas := []int{1, 2, 3, 1, 2, 1, 3}
	for i := 0; i < len(velas); i++ {
		nvelas = nvelas + 1
		if velas[i] > mayor {
			mayor = velas[i]
		}

	}

	for i := 0; i < len(velas); i++ {
		if velas[i] == mayor {
			repetidos = repetidos + 1
		}

	}
	fmt.Println("el numero de velas es:", nvelas, " la mayor es: ", mayor, " y se repite: ", repetidos, " veces")

}

```
### Brain F*ck
```
>+++++++[<++++++++++>-]<++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++[<++++++++++>-]<++.[-]>+++++++++[<++++++++++>-]<+++++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++++++++++[<++++++++++>-]<.[-]>+++++++++++[<++++++++++>-]<++++++.[-]>++++++++++[<++++++++++>-]<+++++.[-]>++++++++++[<++++++++++>-]<.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>++++++++++[<++++++++++>-]<.[-]>+++[<++++++++++>-]<++.[-]>++++++++++[<++++++++++>-]<.[-]>++++++++++[<++++++++++>-]<+.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<++++++++.[-]>++++++++++[<++++++++++>-]<+.[-]>++++++++++[<++++++++++>-]<++++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++++++++++[<++++++++++>-]<+++++.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<+++++.[-]>+++++++++++[<++++++++++>-]<+.[-]>+++++++++++[<++++++++++>-]<.[-]>+++++[<++++++++++>-]<++++++++.[-]>+++[<++++++++++>-]<++.[-]>+++++[<++++++++++>-]<++++++.[-]++++++++++.[-]>++++++++++[<++++++++++>-]<++++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<++++++++.[-]>++++++++++[<++++++++++>-]<+.[-]>++++++++++[<++++++++++>-]<++++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++[<++++++++++>-]<++.[-]>++++++++++[<++++++++++>-]<+++++++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++++++++++[<++++++++++>-]<+++++.[-]>+++[<++++++++++>-]<++.[-]>++++++++++[<++++++++++>-]<+++.[-]>+++++++++++[<++++++++++>-]<++++.[-]>+++++++++[<++++++++++>-]<+++++++.[-]>+++++++++++[<++++++++++>-]<.[-]>++++++++++[<++++++++++>-]<.[-]>++++++++++[<++++++++++>-]<+.[-]>+++[<++++++++++>-]<++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++++++++++[<++++++++++>-]<+++++.[-]>+++[<++++++++++>-]<++.[-]>+++++[<++++++++++>-]<++.[-]++++++++++.[-]>++++++++++++[<++++++++++>-]<+.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<+++++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<++++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++++++++++[<++++++++++>-]<++.[-]>++++++++++[<++++++++++>-]<+++++.[-]>+++++++++++[<++++++++++>-]<++++++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++++[<++++++++++>-]<++++++++.[-]>+++[<++++++++++>-]<++.[-]>+++++[<++++++++++>-]<.[-]>+++[<++++++++++>-]<++.[-]>+++++++++++[<++++++++++>-]<++++++++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++++++++[<++++++++++>-]<+++++++++.[-]>++++++++++[<++++++++++>-]<+.[-]>+++++++++++[<++++++++++>-]<+++++.[-]++++++++++.[-]
```

### bash
```bash
#!/bin/bash

tamanos=(1 4 1 3 4 3 4)
m=0

for i in "${tamanos[@]}"
do
    if [ $i -gt $m ]
    then
        m=$i
    fi
done

repetidas=0
for i in "${tamanos[@]}"
do
    if [ $i -eq $m ]
    then
        repetidas=$(expr $repetidas + 1)
    fi
done

echo "el mayor es $m y las veces que se repite son: $repetidas"
```
