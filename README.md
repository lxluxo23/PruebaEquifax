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
 * @author grupofirma
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
