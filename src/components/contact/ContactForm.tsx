import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  IconButton,
  CircularProgress,
  Chip,
} from "@mui/material";
import { MdEmail, MdPhone, MdMap, MdClose, MdSend } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import emailjs from "@emailjs/browser";

const validationSchema = z.object({
  name: z
    .string({ required_error: "Meg kell adni a nevét!" })
    .min(2, "Minimum 2 karaktert meg kell adni!"),
  email: z
    .string({ required_error: "Meg kell adni egy email címet!" })
    .email("Adjon meg egy érvényes email címet!"),
  phone: z
    .string({ required_error: "Meg kell adni egy telefonszámot!" })
    .regex(/^\+?[\d ][\d ]{7,}$/, "Adjon meg egy telefonszámot!"),
  subject: z
    .string({ required_error: "Meg kell adni egy tárgyat!" })
    .min(2, "Adjon meg egy tárgyat!"),
  message: z
    .string({ required_error: "Meg kell adni egy üzenetet!" })
    .min(2, "Adjon meg egy üzenetet!"),
});

type Input = z.infer<typeof validationSchema>;

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    reset,
    trigger,
    getValues,
    control,
    formState: { errors },
  } = useForm<Input>({
    mode: "all",
    resolver: zodResolver(validationSchema),
  });

  const handleSubmit = async () => {
    const isValid = await trigger();

    if (!isValid) {
      enqueueSnackbar("Minden megjelölt mezőt ki kell tölteni!", {
        variant: "error",
        preventDuplicate: true,
        action: (snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <MdClose color="white" />
          </IconButton>
        ),
      });
      return;
    }

    const data = getValues();
    setLoading(true);

    const credential = {
      serviceId: process.env.REACT_APP_SERVICE_ID as string,
      templateId: process.env.REACT_APP_TEMPLATE_ID as string,
      publicId: process.env.REACT_APP_PUBLIC_ID as string,
    };

    try {
      emailjs
        .send(
          credential.serviceId,
          credential.templateId,
          data,
          credential.publicId
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setLoading(false);
            reset({ name: "", email: "", phone: "", subject: "", message: "" });
            enqueueSnackbar("Az üzenet sikeresen elküldve! Köszönöm :D", {
              variant: "success",
              preventDuplicate: true,
              action: (snackbarId) => (
                <IconButton onClick={() => closeSnackbar(snackbarId)}>
                  <MdClose color="white" />
                </IconButton>
              ),
            });
          },
          (err) => {
            console.log("FAILED...", err);
            setLoading(false);
            enqueueSnackbar("Valami hiba történt próbáld újra!", {
              variant: "error",
              preventDuplicate: true,
              action: (snackbarId) => (
                <IconButton onClick={() => closeSnackbar(snackbarId)}>
                  <MdClose color="white" />
                </IconButton>
              ),
            });
          }
        );
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Valami hiba történt próbáld újra!", {
        variant: "error",
        preventDuplicate: true,
        action: (snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <MdClose color="white" />
          </IconButton>
        ),
      });
    }
  };
  return (
    <form className="w-full h-full p-4 flex flex-col gap-4">
      <h3 className="text-h3 text-title w-full text-center">Kapcsolat</h3>
      <div className="w-full">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              required
              variant="filled"
              label="név"
              placeholder="Példa János"
              size="small"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              required
              variant="filled"
              label="email"
              placeholder="pelda@pelda.com"
              size="small"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              required
              variant="filled"
              label="telefonszám"
              placeholder="06301234567"
              size="small"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </div>
      <div className="w-full">
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              required
              variant="filled"
              label="tárgy"
              placeholder="munkalehetőség"
              size="small"
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
          )}
        />
      </div>
      <div className="w-full">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              multiline
              rows={8}
              fullWidth
              variant="filled"
              label="üzenet"
              placeholder="Szia..."
              size="small"
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          )}
        />
      </div>
      <Button
        disabled={isLoading}
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        endIcon={
          !isLoading ? <MdSend size={20} /> : <CircularProgress size={20} />
        }
      >
        Küldés
      </Button>
      <div className="w-full flex flex-wrap gap-4">
        <Chip
          variant="outlined"
          icon={<MdMap size={20} />}
          label="8137 Mezőkomárom"
        />
        <Chip
          variant="outlined"
          icon={<MdPhone size={20} />}
          label="06/30 6619438"
        />
        <Chip
          variant="outlined"
          icon={<MdEmail size={20} />}
          label="kissbence326@gmail.com"
        />
      </div>
    </form>
  );
};

export default ContactForm;
