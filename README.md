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
