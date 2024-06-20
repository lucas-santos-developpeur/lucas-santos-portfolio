import React from "react";
import { FaCertificate } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { CertificationType } from "@/utils/constants/global-constants";

type Props = {
  certification: CertificationType;
};

export default function CertificationCard({ certification }: Props) {
  return (
    <div className="relative min-h-60 card bg-gray-200 p-4 rounded-xl shadow-md shadow-blue-200 dark:shadow-blue-950 dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <FaCertificate size={32} className="text-blue-500 mr-2" />
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {certification.name}
        </h4>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        <strong>Data de Conclusão:</strong> {certification.date}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        {certification.description}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute bottom-2 left-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Ver Certificado
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{certification.name}</DialogTitle>
          </DialogHeader>
          <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/certificate/certificate.jpg"
                fill
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
