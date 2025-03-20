export function formatResponse(data, message = 'Sucesso', status = 200) {
  return {
    status,
    message,
    data
  };
}

export function handleError(error, message = 'Erro interno do servidor') {
  console.error('Erro:', error);
  return {
    status: 500,
    message,
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  };
}

export function validateRequiredFields(fields, data) {
  const missingFields = fields.filter(field => !data[field]);
  if (missingFields.length > 0) {
    throw new Error(`Campos obrigatórios faltando: ${missingFields.join(', ')}`);
  }
} 