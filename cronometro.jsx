import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Cronometro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI',
            ultimo: null
        };
        //variável do timer do relógio
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        if( this.timer != null ){
            //para o cronometro
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: 'Vai' });

        }else{
            //começa a girar o time
            this.timer = setInterval( () => {
                this.setState({ numero: this.state.numero + 0.1 })}, 100);
            this.setState({ botao: 'PARAR' });
            
           }
        }

        limpar(){
            if( this.timer != null ) {
                //AQUI VAI PARA O TIMER
                clearInterval(this.timer);
                this.timer = null;      
            }else{
                this.setState({
                    ultimo: this.state.numero,
                    numero: 0,
                    botao:'vai'
                })

            }
        }
    



    render() {
        return(
            <View style={ styles.container }>  
                  <Image
                      source={require('./cronometro.png')}
                      style={ styles.cronometro }
                  />

                  <Text style={ styles.timer}>
                    {this.state.numero.toFixed(1)}
                  </Text>
            
                <View style={styles.btnArea}>
                    <TouchableOpacity style={ styles.btn} onPress={ this.vai}>
                        <Text style={ styles.btnTexto }>Início</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.btn} onPress={ this.limpar }>
                        <Text style={ styles.btnTexto }>Limpar</Text>
                    </TouchableOpacity>

                </View>

                  <View style={ styles.ultimaArea}>
                    <Text style={ styles.textoCorrido }>
                         {this.state.ultimo > 0 ? 'Ultimo tempo' +
                        this.state.ultimo.toFixed(2) + ' s ': ''}
                    </Text>
                  </View>
            </View>
        );
    }
}

export default Cronometro;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#00aeef'
    },

    cronometro: {
        
    },

     btnArea: {
        marginTop: 200,
        flexDirection:'row',
    },

    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        height:40,
        width:100,
        margin:17,
        borderRadius:9,
        
    },

    btnTexto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#00aeef',
    },

    timer:{
        marginTop: -160,
        color: '#fff',
        fontSize:65,
        fontWeight:'bold'
    },

    ultimaArea: {
      marginTop: 40,
    },

    textoCorrida: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '#FFF',

    },
}) 

