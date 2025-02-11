import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Sign In Data:", data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.link}>
        Don’t have an account? <Link href="/signup">Create Account</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { height: 40, borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { textAlign: "center", marginTop: 10 },
});