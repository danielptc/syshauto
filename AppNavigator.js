import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Paginas/Home';
import Comodos from "./Paginas/Comodos";
import Usuarios from "./Paginas/Usuarios";
import Ajustes from "./Paginas/Ajustes";
import Consumo from "./Paginas/Consumo";
import Dispositivos from "./Paginas/Dispositivos";
import Equipamentos from "./Paginas/Equipamentos";
import CadastroUsuario from "./Paginas/CadastroUsuario";
import HttpExample from './http_example.js'
import AddDispositivo from "./Paginas/AddDispositivo";
import AddEquipamento from "./Paginas/AddEquipamento";
import ligarLed from "./Paginas/ligarLed";
import testeGet from "./Paginas/testeGet";
import Quarto from "./Paginas/Quarto";
import Iluminacao from "./Paginas/Iluminacao";
import sala from "./Paginas/sala";
import Escritorio from "./Paginas/Escritorio";
import MudarTexto from "./Paginas/MudarTexto";
import ConsumoEnergia from "./Paginas/ConsumoEnergia";
import ConsumoAgua from "./Paginas/ConsumoAgua";
import ConfigComodos from "./Paginas/ConfigComodos";
import EditarDispositivos from "./Paginas/EditarDispositivos";
import MODELOS_GRAFICOS from "./Paginas/MODELOS_GRAFICOS";
import MODELOTextInput01 from "./Paginas/MODELOTextInput01";
import MODELOTextInput02 from "./Paginas/MODELOTextInput02";
import MODELOListaGet from "./Paginas/MODELOListaGet";
import VerDispositivos from "./Paginas/VerDispositivos";
import ApagarDispositivo from "./Paginas/ApagarDispositivo";
import ApagarUsuario from "./Paginas/ApagarUsuario";
import VerUsuarios from "./Paginas/VerUsuarios";
import EdicaoDispositivo from "./Paginas/EdicaoDispositivo";
import EditarUsuario from "./Paginas/EditarUsuario";
import EdicaoUsuario from "./Paginas/EdicaoUsuario";
import VerEquipamentos from "./Paginas/VerEquipamentos";
import TesteComunicacao from "./Paginas/TesteComunicacao";
import TestePaginaComunicacao from "./Paginas/TestePaginaComunicacao";
import AbrirChamado from "./Paginas/AbrirChamado";
import Chamado from "./Paginas/Chamado";
import ChamadoAddEquipamento from "./Paginas/ChamadoAddEquipamento";
import Parent from "./Paginas/Parent";
import Child from "./Paginas/Child";
import RecebendoComponente from "./Paginas/RecebendoComponente";
import TesteFor from "./Paginas/TesteFor";
import EditarEquipamentos from "./Paginas/EditarEquipamentos";
import EdicaoEquipamentos from "./Paginas/EdicaoEquipamentos";
import DetalhesUsuario from "./Paginas/DetalhesUsuario";
import DetalhesDispositivo from "./Paginas/DetalhesDispositivo";
import DetalhesEquipamento from "./Paginas/DetalhesEquipamento";
import ControleSom from "./Paginas/ControleSom";
import TesteSwitch from "./Paginas/TesteSwitch";
import Informacoes from "./Paginas/Informacoes";


const AppNavigator = createStackNavigator({

    Home: { screen: Home },
    DetalhesUsuario: {screen: DetalhesUsuario},
    TesteFor: {screen: TesteFor},
    Comodos: { screen: Comodos },
    Usuarios: { screen: Usuarios},
    Ajustes: {screen: Ajustes},
    Consumo: {screen: Consumo},
    Dispositivos: {screen: Dispositivos},
    Equipamentos: {screen: Equipamentos},
    CadastroUsuario: {screen: CadastroUsuario},
    HttpExample: {screen: HttpExample},
    AddDispositivo: {screen: AddDispositivo},
    ligarLed: {screen: ligarLed},
    AddEquipamento: {screen: AddEquipamento},
    testeGet: {screen: testeGet},
    Quarto: {screen: Quarto},
    Iluminacao: {screen: Iluminacao},
    sala: {screen: sala},
    Escritorio: {screen: Escritorio},
    MudarTexto: {screen: MudarTexto},
    ConsumoEnergia: {screen: ConsumoEnergia},
    ConsumoAgua: {screen: ConsumoAgua},
    ConfigComodos: {screen: ConfigComodos},
    EditarDispositivos: {screen: EditarDispositivos},
    MODELOS_GRAFICOS: {screen: MODELOS_GRAFICOS},
    MODELOTextInput01: {screen: MODELOTextInput01},
    MODELOTextInput02: {screen: MODELOTextInput02},
    MODELOListaGet: {screen: MODELOListaGet},
    VerDispositivos: {screen: VerDispositivos},
    ApagarDispositivo: {screen: ApagarDispositivo},
    ApagarUsuario: {screen: ApagarUsuario},
    VerUsuarios: {screen: VerUsuarios},
    EdicaoDispositivo: {screen: EdicaoDispositivo},
    EditarUsuario: {screen: EditarUsuario},
    EdicaoUsuario: {screen: EdicaoUsuario},
    VerEquipamentos: {screen: VerEquipamentos},
    TesteComunicacao: {screen: TesteComunicacao},
    TestePaginaComunicacao: {screen: TestePaginaComunicacao},
    AbrirChamado: {screen: AbrirChamado},
    Chamado: {screen: Chamado},
    ChamadoAddEquipamento: {screen: ChamadoAddEquipamento},
    Parent: {screen: Parent},
    Child: {screen: Child},
    RecebendoComponente: {screen: RecebendoComponente},
    EditarEquipamentos: {screen: EditarEquipamentos},
    EdicaoEquipamentos: {screen: EdicaoEquipamentos},
    DetalhesDispositivo: {screen: DetalhesDispositivo},
    DetalhesEquipamento: {screen: DetalhesEquipamento},
    ControleSom: {screen: ControleSom},
    TesteSwitch: {screen: TesteSwitch},
    Informacoes: {screen: Informacoes},




});
const Teste = createAppContainer(AppNavigator);
export default Teste;
