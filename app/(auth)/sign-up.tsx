import { images } from "@/constants";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px] " />
          <Text className="text-black text-2xl font-JakartaBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>

        <View className="py-5">
          <InputField />
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
