import { add, format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Header from './src/Header';
import CardContainer from './src/CardContainer';


const initcapital = 9000;
const rate = 0.065;
const savings = 2500;
const period = 6;

const now = new Date();
// const months = ["August", "September", "October", "November", "December", 'January', 'February', 'March', 'April', 'May', 'June', 'July'];
const saving = [3000, 8000, 2000, 3000, 5000, 7000, 2000, 2000];
// const saving = [0, 0, 0, 0, 0, 0];
const maturityDate = add(new Date(), { months: period });
// console.log("Add 3 months to November", maturityDate);


const capital = () => {
  var capital = initcapital;

  for (let index = 0; index < period; index++) {
    if (saving.length < index + 1) {
      var savings = 2000;
    } else {
      var savings = saving[index];
    }

    if (index === 0) {
      capital += savings;
    } else {
      capital += capital * rate + savings;
    }
  }

  console.log(`Profit: ${(capital - initcapital).toLocaleString()}`);
  console.log(`capital: ${capital.toLocaleString()}`);

  return capital;
};



const capitaldetails = () => {
  var capital = initcapital;
  var arrayOfObjects = [];
  // const capitaldetails() = fs.readFileSync('data.json');

  for (let index = 0; index < period; index++) {
    var obj = {};
    // console.log(`${months[index]}: ${(capital * rate).toLocaleString()} `)
    const maturityDate = add(new Date(), { months: index + 1 });
    let mon = add(new Date(), { months: index });
    if (saving.length < index + 1) {
      var savings = 2000;
    } else {
      var savings = saving[index];
    }

    if (index === 0) {
      capital += savings;
      obj["id"] = index;
      obj["month"] = format(mon, "MMMM yy");
      obj["initcapital"] = initcapital.toLocaleString();
      obj["capitalM"] = capital.toLocaleString();
      obj["contributions"] = savings;
      obj["totalM"] = (capital - initcapital).toLocaleString();
      obj["profitM"] = (capital * rate).toLocaleString();
      obj["maturityDate"] = format(maturityDate, "dd/MM/yyyy");
      arrayOfObjects.push(obj);
    } else {
      obj["totalM"] = (capital * rate + savings).toLocaleString();
      capital += capital * rate + savings;

      obj["capitalM"] = capital.toLocaleString();
      obj["month"] = format(mon, "MMMM yy");
      obj["id"] = index;
      obj["profitM"] = (capital * rate).toLocaleString();
      obj["initcapital"] = initcapital.toLocaleString();
      obj["contributions"] = savings;
      obj["maturityDate"] = format(maturityDate, "dd/MM/yyyy");
      arrayOfObjects.push(obj);
    }
  }

  console.log(`Profit: ${(capital - initcapital).toLocaleString()}`);
  console.log(`capital: ${capital.toLocaleString()}`);
  console.log(arrayOfObjects);

  return arrayOfObjects;
};


export default function App() {
  return (
    <View style={styles.pagebackground}>
      <Text>Total: {capital().toLocaleString()}</Text>
      <Text>Initcapital: {initcapital.toLocaleString()}</Text>
      <Text>Profit: {(capital() - initcapital).toLocaleString()}</Text>
      {/* <StatusBar style="auto" /> */}
      <Header/>
      <CardContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagebackground: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: "100%",
    height: 812
    },
    background1: {
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
      width: 0,
      height: 4
      },
      shadowRadius: 24,
      elevation: 24,
      shadowOpacity: 1,
      flex: 1,
      width: "100%",
      height: 170,
      backgroundColor: "transparent"
      }
});
